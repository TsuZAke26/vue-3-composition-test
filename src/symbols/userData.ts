import type { InjectionKey } from 'vue';
import type { UserData } from '@/types/IUserData';

const UserDataKey: InjectionKey<UserData> = Symbol('userData');

export { UserDataKey };
