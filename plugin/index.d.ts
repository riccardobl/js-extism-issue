declare module "main" {
    export function run(): I32;
}
 
declare module "extism:host" {
    interface user {
        Test_success(offs: I64): I64;
    }
}