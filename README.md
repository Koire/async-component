# Async-Component

## Installation

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
