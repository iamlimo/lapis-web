// tslint:disable-next-line: class-name
export interface authModel {
    email: string;
    username: string;
    name: string;
    password: string;
    password_confirmation: string;
}


export interface userType {
    member: 'user';
    admin: 'admin';
}

export interface teachingsModel {
    title: string;
    link: string;
}