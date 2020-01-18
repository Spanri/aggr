import { IDGenerator } from "@helpers/generator.helper";

export default {
	model: {
		prop: "value",
		event: "change",
	},

	props: {
		/**
		 * Выбранное значение
		 */
		value: {
			type: [Object, String],
			default: null,
		},

		/**
		 * Из чего выбирать
		 * id (not required), text (required)
		 */
		items: {
			type: Array,
			default: () => [],
		},

		/**
		 * Как располагать выпадающее меню относительно
		 * основного блока (vertical или horizontal)
		 */
		flow: {
			type: String,
			default: "vertical",
		},

		/**
		 * Если нужно, чтобы dropdown был зафиксирован
		 * в каком-то положении, то вводим это
		 * 0 - не зафиксирован
		 * 1 - слева/сверху (в зависимости от flow)
		 * 2 - справа/снизу (в зависимости от flow)
		 */
		fixedFlow: {
			type: [Number, String],
			default: 0,
		},

		/**
		 * При выборе элемента закрывать dropdown или нет
		 */
		autoClose: {
			type: Boolean,
			default: false,
		},
	},

	data() {
		return {
			isDropdownShow: false,
			styleObject: this.onScrollWindow(),
		};
	},

	watch: {
		isDropdownShow() {
			this.onScrollWindow();
		},
	},

	mounted() {
		/**
		 * Для слежения за положением dropdown
		 */
		this.$nextTick(() => {
			window.addEventListener("scroll", this.onScrollWindow);
			window.addEventListener("resize", this.onResize);
		});
		/**
		 * Если у value нет id, добавляем его
		 */
		this.items.forEach((item, index) => {
			if (!("id" in item)) {
				this.items[index].id = IDGenerator();
			}
		});
	},

	beforeDestroy() {
		window.removeEventListener("scroll", this.onScrollWindow);
		window.removeEventListener("resize", this.onResize);
	},

	methods: {
		/**
		 * Для вычисления styleObject, то есть
		 * положения dropdown относительно slot
		 */
		onScrollWindow() {
			if (this.isDropdownShow) {
				const styles = { "--right": "auto", "--left": 0, "--bottom": "auto", "--top": 0 };

				const sizes = {
					windowScrollTop: window.top.scrollY,
					dropdownHeight: this.$refs.dropdown.clientHeight,
					dropdownWidth: 170, // жестко задано
					slotHeight: this.$refs.slot.clientHeight,
					slotWidth: this.$refs.slot.clientWidth,
					slotLeft: this.$refs.slot.getBoundingClientRect().left,
				};

				if (this.flow == "vertical") {
					if (this.fixedFlow == "1") {
						styles["--bottom"] = sizes.slotHeight + "px";
						styles["--top"] = "auto";
					} else if (this.fixedFlow == "2") {
						styles["--top"] = sizes.slotHeight + "px";
						styles["--bottom"] = "auto";
					} else {
						if (sizes.dropdownHeight < sizes.windowScrollTop) {
							styles["--top"] = sizes.slotHeight + "px";
							styles["--bottom"] = "auto";
						} else if (sizes.dropdownHeight >= sizes.windowScrollTop) {
							styles["--bottom"] = sizes.slotHeight + "px";
							styles["--top"] = "auto";
						}
					}
					styles["--left"] = sizes.slotWidth / 2 - sizes.dropdownWidth / 2 + "px";
				} else {
					if (this.fixedFlow == "1") {
						styles["--right"] = "auto";
						styles["--left"] = sizes.slotWidth + "px";
					} else if (this.fixedFlow == "2") {
						styles["--right"] = sizes.slotWidth + "px";
						styles["--left"] = "auto";
					} else {
						if (sizes.dropdownWidth > sizes.slotLeft) {
							styles["--right"] = "auto";
							styles["--left"] = sizes.slotWidth + "px";
						} else if (sizes.dropdownWidth < sizes.slotLeft) {
							styles["--right"] = sizes.slotWidth + "px";
							styles["--left"] = "auto";
						}
					}
				}

				this.styleObject = styles;
			}
		},

		/**
		 * Когда меняется размер, тоже отслеживать
		 * положение droppdown
		 */
		onResize() {
			this.onScrollWindow();
		},

		/**
		 * Скрыть выпадающий список ролей
		 */
		onHideDropdown() {
			this.isDropdownShow = false;
		},

		/**
		 * Выбрать элемент
		 */
		onClickItem(item) {
			if (this.autoClose) {
				this.onHideDropdown();
			}

			this.$emit("change", item);
		},
	},
};
