import { describe, context, it, TR, expect, comment } from 'soda-test'

@describe('TestPlan2', {description: 'Placeholder for a test, that shall read as ts when creating testplan'})
class Plan2Test {

    @comment('Test Step outside of a context')
    @it()
    method1(): TR {
        expect(1).to.equal(1)
    }

@context('context1', {description: 'just for testplan test'})

    @comment('Test Step inside of a context')
    @it('second step', {description: 'nothing spacil'})
    method2(): TR {
        expect(2).to.equal(2)
    }
}