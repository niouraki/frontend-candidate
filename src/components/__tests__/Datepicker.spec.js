import { test, describe, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Datepicker from "../Datepicker.vue";

describe('Datepicker', function () {
	test('renders html', () => {
		const component = mount(Datepicker);
		expect(component.html().length > 0).toBe(true);
	})
});
