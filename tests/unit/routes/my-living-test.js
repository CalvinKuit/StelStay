import { module, test } from 'qunit';
import { setupTest } from 'stel-stay/tests/helpers';

module('Unit | Route | my-living', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:my-living');
    assert.ok(route);
  });
});
