import { module, test } from 'qunit';
import { setupTest } from 'stel-stay/tests/helpers';

module('Unit | Route | rooms', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:rooms');
    assert.ok(route);
  });
});
