
import { _prettyPrint, App } from './App';


test('_prettyPrint', ()=>{
    const value = _prettyPrint([{"name": "sonu"}]);
    expect(value).not.toMatch(/&/g, '&amp;');
})