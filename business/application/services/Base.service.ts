import React from "react";
import { toastMessage } from "../../../src/utils/toastMessage";
import { instances } from "../../../config/axios/axios.instances";

export abstract class Base extends React.Component {
    protected _private = instances.private;
    protected _public = instances.public;

    constructor() {
        super({});
    };

    protected message(message: string, type: "error" | "success") {
        toastMessage(message, type);
    };
};
