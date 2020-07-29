import React from "react";
import {create} from 'react-test-renderer'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

describe("ProfileStatusWithHooks component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatusWithHooks status="SUBSCRIBE TO BASIC"/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("SUBSCRIBE TO BASIC");
    });
});