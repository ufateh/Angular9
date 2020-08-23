export interface Signatory {
    id: string;
    email: string;
    name: string;
    status: ApprovalStatus,
    comment: string;
    commentDate: Date;
}

export enum ApprovalStatus {
    Inactive = 0,
    Pending = 1,
    Approved = 2,
    Rejected = 3,
}