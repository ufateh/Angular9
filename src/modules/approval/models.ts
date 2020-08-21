export interface Signatory {
    id: string;
    email: string;
    name: string;
    status: ApprovalStatus,
    comment: string;
    commentDate: Date;
}

export enum ApprovalStatus {
    Approved,
    Rejected,
    Pending,
    Inactive
}