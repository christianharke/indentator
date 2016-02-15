import Cycle from '@cycle/core';
import { makeDOMDriver, hJSX } from '@cycle/dom';

import checkboxes from './utils/checkboxes';
import indent from './utils/indent';

function main(drivers) {
    return {
        DOM: drivers.DOM.select('textarea').events('input')
            .map(ev => ev.target.value)
            .startWith('output')
            .map(raw =>
                <div>
                    <textarea placeholder="input"></textarea>
                    <p>{checkboxes()}</p>
                    <p>{indent(raw)}</p>
                </div>
        )
    };
}

const drivers = {
    DOM: makeDOMDriver('#app')
};

Cycle.run(main, drivers);
