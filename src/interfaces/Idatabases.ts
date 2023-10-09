import { ClientConfig } from 'pg';

export type PostgreConfig = Pick <ClientConfig, 
  "user" |
  "password" | 
  "host" | 
  "database" |
  "port" |
  "connectionString"
>
