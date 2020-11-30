import {render, unmountComponentAtNode} from 'react-dom';
import {act} from "react-dom/test-utils";
import Hello from '../components/hello';

let container = null;

beforeEach( () => {
    // Setup DOM Element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach( () => {
    // Cleanup after testing
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("renders without a name", () => {
    act(() => {
        render(<Hello/> , container);
    });
    expect(container.textContent).toBe("Hey Stranger!");

    act(() => {
        render(<Hello name="Layo Bigman"/> , container);
    })

    act(() => {
        render(<Hello name="Margaret"/> , container);
    })
    expect(container.textContent).toBe("Hey Margaret!");

});