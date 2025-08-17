import { QueryClient, QueryFunction } from "@tanstack/react-query";
import { io, Socket } from "socket.io-client";

async function throwIfResNotOk(res: Response) {
  if (!res.ok) {
    const text = (await res.text()) || res.statusText;
    throw new Error(`${res.status}: ${text}`);
  }
}

export async function apiRequest(
  method: string,
  url: string,
  data?: unknown | undefined,
): Promise<Response> {
  const res = await fetch(url, {
    method,
    headers: data ? { "Content-Type": "application/json" } : {},
    body: data ? JSON.stringify(data) : undefined,
    credentials: "include",
  });

  await throwIfResNotOk(res);
  return res;
}

type UnauthorizedBehavior = "returnNull" | "throw";
export const getQueryFn: <T>(options: {
  on401: UnauthorizedBehavior;
}) => QueryFunction<T> =
  ({ on401: unauthorizedBehavior }) =>
  async ({ queryKey }) => {
    const res = await fetch(queryKey.join("/") as string, {
      credentials: "include",
    });

    if (unauthorizedBehavior === "returnNull" && res.status === 401) {
      return null;
    }

    await throwIfResNotOk(res);
    return await res.json();
  };

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: getQueryFn({ on401: "throw" }),
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});

// Socket.IO connection for real-time updates
let socket: Socket | null = null;

export function initializeSocket() {
  if (socket) return socket;

  socket = io(window.location.origin, {
    transports: ['websocket', 'polling']
  });

  socket.on('connect', () => {
    console.log('🔌 Connected to real-time updates');
  });

  socket.on('projects-updated', (updatedProjects) => {
    console.log('📦 Projects updated, refreshing data...');
    
    // Invalidate and refetch projects query
    queryClient.setQueryData(["/api/projects"], updatedProjects);
    queryClient.invalidateQueries({ queryKey: ["/api/projects"] });
  });

  socket.on('disconnect', () => {
    console.log('🔌 Disconnected from real-time updates');
  });

  return socket;
}

export function getSocket() {
  return socket;
}
