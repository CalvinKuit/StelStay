import { module, test } from 'qunit';
import { setupTest } from 'stel-stay/tests/helpers';

module('Unit | Route | example', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:example');
    assert.ok(route);
  });
});
