import { test, describe, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import UserProfile from "../UserProfile.vue";

describe('UserProfile', function () {
	test('renders html', () => {
		const component = mount(UserProfile);
		expect(component.html().length > 0).toBe(true);
	})
});
