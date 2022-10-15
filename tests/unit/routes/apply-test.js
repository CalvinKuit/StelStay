import { module, test } from 'qunit';
import { setupTest } from 'stel-stay/tests/helpers';

module('Unit | Route | apply', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:apply');
    assert.ok(route);
  });
});
