export function add(a: number, b: number) {
    if(a < b) {
        throw new Error("A less than B error");
    }
    
    return a + b;
}