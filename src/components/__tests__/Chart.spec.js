import { test, describe, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Chart from "../Chart.vue";

describe('Chart', function () {
	test('renders html', () => {
		const component = mount(Chart);
		expect(component.html().length > 0).toBe(true);
	})
});
