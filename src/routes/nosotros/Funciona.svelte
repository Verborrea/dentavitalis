<section class="funciona">
	<div class="text-container">
		<h2>Mira como funciona</h2>
		<p>
			Aquí te explicamos todo el proceso para imprimir una sonrisa perfecta:
		</p>
		<strong>1. Escaneo</strong>
		<p>
			Este escáner toma imágenes detalladas y en 3D de la estructura dental y la
			encía, creando un modelo digital altamente preciso.
		</p>
		<strong>2. Diseño en Laboratorio</strong>
		<p>
			Una vez que se obtiene el escaneo 3D del paciente, los profesionales
			dentales utilizan software de diseño asistido por computadora (CAD)
			específico para la odontología para planificar y diseñar la prótesis dental
			o el dispositivo necesario.
		</p>
		<strong>3. Impresión</strong>
		<p>
			El archivo de diseño se carga en una impresora 3D dental que utiliza resinas
			dentales o materiales similares para construir el objeto capa por capa. Las
			impresoras 3D dentales utilizan tecnologías como la estereolitografía (SLA)
			o la deposición de material fundido (FDM) para imprimir las capas y crear el
			objeto final.
		</p>

		<strong>4. Colocación y entrega</strong>
		<p>
			Una vez que la prótesis dental o el dispositivo está listo y cumple con los
			estándares de calidad, se entrega al paciente para su colocación y uso.
		</p>
	</div>
	<div class="img-container">
		<div class="image"></div>
	</div>
</section>

<style>
	.funciona, .text-container {
		display: flex;
		flex-direction: column;
	}
	.funciona>* {
		flex: 1;
		padding: 0 24px;
	}
	.text-container {
		gap: 16px;
	}
	strong {
		font-size: 22px;
	}
	.image {
		display: none;
	}

	@media (min-width: 924px) {
		.funciona {
			flex-direction: row;
			justify-content: center;
			max-width: 1080px;
			margin: auto;
		}
		.funciona>* {
			padding: 0 16px;
		}
		.img-container {
			position: relative;
			padding: 140px 16px;
		}
		.image {
			display: block;
			width: 500px;
			height: 400px;
			background-color: gray;

			position: sticky;
			top: 140px;
		}
	}
</style>
