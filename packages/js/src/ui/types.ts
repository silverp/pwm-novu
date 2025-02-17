import type { Notification } from '../notifications';
import type { NovuOptions } from '../types';
import { appearanceKeys, defaultLocalization } from './config';

export type NotificationClickHandler = (notification: Notification) => void;
export type NotificationActionClickHandler = (notification: Notification) => void;

export type NotificationRenderer = (el: HTMLDivElement, notification: Notification) => () => void;
export type BellRenderer = (el: HTMLDivElement, unreadCount: number) => () => void;

export type Tab = { label: string; value: Array<string> };

export type CSSProperties = {
  [key: string]: string | number;
};

export type ElementStyles = string | CSSProperties;

export type Variables = {
  colorBackground?: string;
  colorForeground?: string;
  colorPrimary?: string;
  colorPrimaryForeground?: string;
  colorSecondary?: string;
  colorSecondaryForeground?: string;
  colorCounter?: string;
  colorCounterForeground?: string;
  colorNeutral?: string;
  fontSize?: string;
  borderRadius?: string;
};

export type AppearanceKey = (typeof appearanceKeys)[number];
export type Elements = Partial<Record<AppearanceKey, ElementStyles>>;

export type Theme = {
  variables?: Variables;
  elements?: Elements;
};
export type Appearance = Theme & { baseTheme?: Theme | Theme[] };

export type LocalizationKey = keyof typeof defaultLocalization;
export type Localization = Partial<Record<LocalizationKey, string>>;

export type BaseNovuProviderProps = {
  appearance?: Appearance;
  localization?: Localization;
  options: NovuOptions;
  tabs?: Array<Tab>;
};

export type NovuProviderProps = BaseNovuProviderProps & {
  renderNotification?: NotificationRenderer;
  renderBell?: BellRenderer;
};

export enum NotificationStatus {
  UNREAD_READ = 'unreadRead',
  UNREAD = 'unread',
  ARCHIVED = 'archived',
}
