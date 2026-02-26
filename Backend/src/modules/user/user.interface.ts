export type Role = 'donor' | 'recipient' | 'admin';
export type Gender = 'male' | 'female' | 'other';
export type status = 'active' | 'inactive' | 'suspended';

export interface IUser {
    name: string;
    email: string;
    phone: string;
    password: string;
    role: Role;
    bloodGroup: string;
    division: string;
    district: string;
    upazila: string
    dateOfBirth: Date;
    gender: Gender;
    availability: boolean;
    occuption?: string;
    profilePhoto?: string;
    lastDonationDate?: Date;
    cooldownEndDate?: Date;
    eligibilityStatus?: boolean;
    donationCount?: number;
    weightEligible?: number;
    isVerified?: boolean;
    isDeleted?: boolean;
    status?: string;
};