import React from "react";

export const updateObjectInArray = (items, itemId, objPromName, newObjProps) => {
    return items.map(u => {
        if (u[objPromName] === itemId) {
            return {...u, ...newObjProps}
        }
        return u
    });
}
