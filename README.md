# Async-Component

## Description

A very simple component that creates a blocking module that requires user interaction to continue.
This is very useful for confirming a module pop-up, or for two step functions where you have to absolutely confirm the user's interaction, i.e. deleting from a database or changing a critical setting.
The cancel or confirm function will allow you to register the user's exact interaction.

## Usage

```JavaScript
    import {AsyncComponentCreator} from "AsyncComponentCreator"
    export const MyComponent = () => {
        const { AsyncComponent, asyncGetValue, cancel, confirm } = AsyncComponentCreator()
        const cancelFn = () => cancel(console.log("user cancelled"))
        const confirmFn = () => confirm(console.log("user confirmed"))
        return <div>
            <AsyncComponent>
                Do you accept the terms and conditions
                <button onClick={cancel}>Cancel</button>
                <button onClick={confirm}>Confirm</button>
            </AsyncComponent>
            <button onClick={asyncGetValue}>Get Value</button>
        </div>
    }
```
