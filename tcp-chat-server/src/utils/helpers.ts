export function formatMessage(username: string, message: string): string {
    return `${new Date().toISOString()} [${username}]: ${message}`;
}

export function handleError(error: Error): void {
    console.error(`Error: ${error.message}`);
}