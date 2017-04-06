(function(){
	var app = angular.module('store', []);

	var gem = {
		name: 'Dodecachedron',
		price: 2.95,
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti impedit quod consequuntur obcaecati animi sit, distinctio nobis. Eos obcaecati illum recusandae, eveniet itaque nisi repellendus aut ut, molestiae autem optio!',
		canPurchase: false,
		soldOut: false
	}

	var gems = [
		{
			name: 'Dodecachedron',
			price: 2.95,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti impedit quod consequuntur obcaecati animi sit, distinctio nobis. Eos obcaecati illum recusandae, eveniet itaque nisi repellendus aut ut, molestiae autem optio!',
			canPurchase: false,
			soldOut: false,
			image: 'public/img/dodec.png'
		},
		{
			name: 'Zirconium',
			price: 3.95,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti impedit quod consequuntur obcaecati animi sit, distinctio nobis. Eos obcaecati illum recusandae, eveniet itaque nisi repellendus aut ut, molestiae autem optio!',
			canPurchase: false,
			soldOut: false,
			image: 'public/img/hexagon.png'
		},
		{
			name: 'Hexagonal Gem',
			price: 4.95,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti impedit quod consequuntur obcaecati animi sit, distinctio nobis. Eos obcaecati illum recusandae, eveniet itaque nisi repellendus aut ut, molestiae autem optio!',
			canPurchase: false,
			soldOut: false,
			image: 'public/img/zirconium.png'
		},
		{
			name: 'Capri Blue',
			price: 1.92,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti impedit quod consequuntur obcaecati animi sit, distinctio nobis. Eos obcaecati illum recusandae, eveniet itaque nisi repellendus aut ut, molestiae autem optio!',
			canPurchase: false,
			soldOut: false,
			image: 'public/img/capri.png'
		},
		{
			name: 'Black Diamond',
			price: 2.36,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti impedit quod consequuntur obcaecati animi sit, distinctio nobis. Eos obcaecati illum recusandae, eveniet itaque nisi repellendus aut ut, molestiae autem optio!',
			canPurchase: false,
			soldOut: false,
			image: 'public/img/black.png'
		},
		{
			name: 'Turquoise',
			price: 9.00,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti impedit quod consequuntur obcaecati animi sit, distinctio nobis. Eos obcaecati illum recusandae, eveniet itaque nisi repellendus aut ut, molestiae autem optio!',
			canPurchase: false,
			soldOut: false,
			image: 'public/img/turq.png'
		},
		{
			name: 'Crystal',
			price: 16.35,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti impedit quod consequuntur obcaecati animi sit, distinctio nobis. Eos obcaecati illum recusandae, eveniet itaque nisi repellendus aut ut, molestiae autem optio!',
			canPurchase: false,
			soldOut: false,
			image: 'public/img/crystal.png'
		},
		{
			name: 'Emerald',
			price: 12.45,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti impedit quod consequuntur obcaecati animi sit, distinctio nobis. Eos obcaecati illum recusandae, eveniet itaque nisi repellendus aut ut, molestiae autem optio!',
			canPurchase: false,
			soldOut: false,
			image: 'public/img/emerald.png'
		},
		{
			name: 'Violet',
			price: 5.49,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti impedit quod consequuntur obcaecati animi sit, distinctio nobis. Eos obcaecati illum recusandae, eveniet itaque nisi repellendus aut ut, molestiae autem optio!',
			canPurchase: false,
			soldOut: false,
			image: 'public/img/violet.png'
		}
	];

	app.controller('StoreController', function(){
		this.products = gems;
	});
})(); //funcion Recursiva - Se llama a si misma 

