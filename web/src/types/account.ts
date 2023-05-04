export type Accounts = {
    id: number;
    user_id: number;
    status_id: number;
    type_bill: {
        id: number;
        type: string;
        createdAt: string;
    };
    name: string;
    beneficiary_name: string;
    expiration: Date;
    amount: number;
    comments: string;
    createdAt: Date;
} 