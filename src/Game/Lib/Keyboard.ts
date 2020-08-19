const KeyPressed = {}

const KeyDownListener = (e) => {
    KeyPressed[e.key] = true
}

const KeyUpListener = (e) => {
    KeyPressed[e.key] = false
}

export { KeyPressed, KeyDownListener, KeyUpListener}