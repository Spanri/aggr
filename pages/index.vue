<template>
	<div class="index">
		<div class="index__first-page">
			<h1 class="index__title">НАВИГАТОР АБИТУРИЕНТА</h1>
			<p class="index__text">Выберите карточку для определения фильтра.</p>
			<div class="index__block-wrapper">
				<div class="index__block index__professions">
					<p class="index__block-title">Профессии</p>
					<p class="index__block-text">Если профессия уже выбрана, можно пройти сюда.</p>
					<nuxt-link class="index__block-link" to="/blocks/professions">
						Подробнее
						<i class="icon-keyboard_arrow_right" />
					</nuxt-link>
				</div>
				<div class="index__block index__EGE">
					<p class="index__block-title">Баллы ЕГЭ</p>
					<p class="index__block-text">Введите баллы ЕГЭ и узнайте, какие заведения ждут вас.</p>
					<nuxt-link class="index__block-link" to="/blocks/ege">
						Подробнее
						<i class="icon-keyboard_arrow_right" />
					</nuxt-link>
				</div>
				<div class="index__block index__school-subjects">
					<p class="index__block-title">Школьные предметы</p>
					<p class="index__block-text">Любите определенный школьный предмет? Вам сюда!</p>
					<nuxt-link class="index__block-link" to="/blocks/school-subjects">
						Подробнее
						<i class="icon-keyboard_arrow_right" />
					</nuxt-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Index",
};
</script>

<style lang="scss">
.index {
	max-width: 1440px;
	margin: 0 auto;
	text-align: center;

	&__title {
		font-size: 44px;
		line-height: 52px;
		text-align: left;
		padding: 50px 70px 30px;
	}

	&__text {
		color: $gray-lightest;
		font-size: 24px;
		line-height: 28px;
		text-align: left;
		padding: 0 70px 30px;
	}

	&__block {
		width: 400px;
		min-height: 400px;
		border-radius: 10px;
		margin-bottom: 50px;

		&-wrapper {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;

			max-width: 1300px;
			margin: 0 auto;
		}

		&-link {
			display: block;
			color: $white;
			background: $color-accent;
			width: 100%;
			text-align: right;
			padding: 15px;
			padding-top: 20px;
			margin: 20px 0;
			text-decoration: none;
			font-weight: bold;
			font-size: 22px;
			line-height: 24px;
			min-height: 89px;

			&:hover {
				color: $gray;
				transition: 0.3s;
			}
		}

		&-title {
			color: $white;
			text-transform: uppercase;
			text-align: left;
			padding: 60px 50px 30px;
			font-weight: bold;
			font-size: 22px;
			line-height: 24px;
		}

		&-text {
			color: $white;
			text-align: left;
			padding: 0 50px;
			font-size: 16px;
			line-height: 18px;
		}
	}

	&__professions {
		background: linear-gradient(125deg, $red, $red-accent);
	}

	&__EGE {
		background: linear-gradient(125deg, $yellow-accent, $yellow);
	}

	&__school-subjects {
		background: linear-gradient(125deg, $green, $green-accent);
	}
}
</style>
