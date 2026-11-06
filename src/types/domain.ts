export type UUID = string;
export type ISODate = string;

export type UserRole =
  | 'guest' | 'beneficiary' | 'donor' | 'volunteer'
  | 'reviewer' | 'admin' | 'super_admin' | 'auditor' | 'field_agent';

export interface Session {
  userId: UUID;
  role: UserRole;
  expiresAt: ISODate;
}

export type IntegrationStatus =
  | 'mock' | 'configured' | 'connected' | 'disabled' | 'error';

export interface IntegrationState {
  id: string;
  status: IntegrationStatus;
  lastCheckedAt?: ISODate;
  reason?: string;
}
