import React from 'react';

const FamilyContext = React.createContext();

// export let FamilyProvider = FamilyContext.Provider;
// export let FamilyConsumer = FamilyContext.Consumer;

let FamilyProvider = FamilyContext.Provider;
let FamilyConsumer = FamilyContext.Consumer;

export { FamilyConsumer, FamilyProvider };