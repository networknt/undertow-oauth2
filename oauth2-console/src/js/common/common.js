import { Service, Client, User, Key } from '../main/views.js';
import {TokenView} from '../components/tokenView.js';

export const Views = {
    SERVICE: {
                name: "Services",
                path: "/services",
                dataType: "service",
                component: Service
        },
    CLIENT: {
                name: "Clients",
                path: "/clients",
                dataType: "client",
                component: Client
            },
    USER: {
                name: "Users",
                path: "/users",
                dataType: "user",
                component: User
          },
    TOKEN: {
                name: "Token",
                path: "/token",
                dataType: "token request",
                component: TokenView
          },
    KEY: {
                name: "Key",
                path: "/key",
                dataType: "key",
                component: Key 
          }
};