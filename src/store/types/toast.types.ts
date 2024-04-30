export type ToastType = 'SUCCESS' | 'ERROR' | 'INFORMATION';

export interface ToastPayload {
    text: string,
    type: ToastType
}