﻿import { overrideModalViewMethod } from "@viggo/nativescript-windowed-modal";
import * as application from "tns-core-modules/application";

overrideModalViewMethod();
application.run({ moduleName: "main-page" });
