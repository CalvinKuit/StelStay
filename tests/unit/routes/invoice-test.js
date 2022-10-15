import { module, test } from 'qunit';
import { setupTest } from 'stel-stay/tests/helpers';

module('Unit | Route | invoice', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:invoice');
    assert.ok(route);
  });
});
