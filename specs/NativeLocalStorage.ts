import type { TurboModule } from "react-native";
import { TurboModuleRegistry } from "react-native";


// Implementation of the localStorage specification:
export interface Spec extends TurboModule {
    setItem(value: string, key: string): void;
    getItem(key: string): string | null;
    removeItem(key: string): void;
    clear(): void;
}

export default TurboModuleRegistry.getEnforcing<Spec>(
    'NativeLocalStorage'
);
