import * as React from "react";
import Svg, { Path } from "react-native-svg";
const CategoryVariant1Svg = ({
	width = 110,
	height = 108,
	fill = "none",
	...props
}: {
	width?: number;
	height?: number;
	fill?: string;
	props?: any;
}) => (
	<Svg width={width} height={height} fill="none" {...props}>
		<Path
			fill="#F9ACC0"
			d="m106.904 61.935-27.548-12-10.7 3.246 18.4 17.316 19.848-8.562Z"
		/>
		<Path
			fill="#3D5CFF"
			d="m15.27 67.61-.59 20.682 6.6-2.4-2.042 21.639 58.317.24-3.968-32.705 15.51-4.808-8.416-19s-21.968 1.984-35.471 5.17A121.568 121.568 0 0 0 26.452 62.8c-7.214 3.006-11.182 4.81-11.182 4.81Z"
		/>
		<Path
			fill="#1F1F39"
			d="M34.628 25.166c-3.847 2.886-4.569 9.259-6.133 12.866-1.564 3.607-2.284 4.57-3.727 6.012a7.31 7.31 0 0 1-3.487 1.804s5.17 8.537 19.48 7.816c14.308-.721 21.041-6.733 23.566-9.138a15.561 15.561 0 0 0 3.607-5.772s-6.854-.361-9.739-6.132c-2.885-5.771-6.253-9.62-10.46-9.62-4.209 0-6.013 1.683-6.013 1.683a5.956 5.956 0 0 0-7.094.481Z"
		/>
		<Path
			fill="#224BF4"
			d="m15.006 88.183 6.277-2.3-.35 3.767 1.31-10.99-7.237 9.523ZM74.32 81.08l-.733-6.012 3.463-1.07-5.063-8.73L74.32 81.08Z"
		/>
		<Path
			fill="#fff"
			d="M60.456 67.467c-.175.375-.471.68-.842.866a2.856 2.856 0 0 0-.985.866 1.6 1.6 0 0 0 .7 2.3c.227.108.42-.228.191-.337a1.228 1.228 0 0 1-.67-1.539c.07-.205.193-.388.355-.532.59-.553 1.564-.842 1.66-1.756a1.826 1.826 0 0 0-.59-1.322c-.143-.18-.42.1-.264.289.264.324.59.721.445 1.165ZM27.414 105.739a.979.979 0 0 1-.339.782c-.457.457-1.082.673-1.467 1.2-.144.2.192.4.337.192.239-.273.524-.501.842-.673.303-.182.57-.417.788-.695a1.176 1.176 0 0 0 .216-.95 2.173 2.173 0 0 0-.57-.962c-.156-.2-.433.072-.277.265.236.228.4.52.47.841ZM66.998 75.5a2.39 2.39 0 0 1-.974.95 2.643 2.643 0 0 0-.986.865 1.45 1.45 0 0 0 .06 1.477c.36.517.85.93 1.419 1.2a.194.194 0 0 0 .192-.337 3.28 3.28 0 0 1-1.262-1.017 1.083 1.083 0 0 1 .048-1.31 5.13 5.13 0 0 1 1.058-.759c.397-.259.704-.635.878-1.077.189-.52.172-1.092-.048-1.6a.193.193 0 0 0-.265-.076.2.2 0 0 0-.084.265 1.766 1.766 0 0 1-.036 1.418ZM33.487 94.136a3.723 3.723 0 0 0 0-1.033 1.354 1.354 0 0 0-1.178-1.082 2.328 2.328 0 0 0-1.034.108c-.3.1-.59.24-.9.325a.867.867 0 0 1-.866-.144c-.213-.2-.371-.451-.46-.73a2.099 2.099 0 0 1 .23-1.82c.132-.205-.193-.397-.337-.193a2.486 2.486 0 0 0-.373 1.673 2.132 2.132 0 0 0 .842 1.5c.589.385 1.25.023 1.828-.18a1.487 1.487 0 0 1 1.707.24c.18.325.24.704.168 1.07a6.29 6.29 0 0 1-.2 1.262c-.048.216.325.325.385.084.093-.353.156-.715.188-1.08ZM68.728 95.363c-.625-.024-1.07.553-1.515.913a2.823 2.823 0 0 1-3.343.505 1.6 1.6 0 0 1-.722-1.54c.049-.242-.324-.347-.372-.107a2.167 2.167 0 0 0 1.792 2.357 3.105 3.105 0 0 0 1.8-.253 5.697 5.697 0 0 0 1.539-1.07c.22-.192.508-.457.82-.41.2.025.506.254.374.482-.084.2.24.4.36.18.277-.492-.228-1.033-.733-1.057ZM54.804 83.194a1.71 1.71 0 0 1-.9 1.323c-.521.293-.973.695-1.324 1.178a1.262 1.262 0 0 0 .06 1.527 1.885 1.885 0 0 0 1.623.421c.108-.012.156-.144.132-.24-.024-.096-.132-.149-.242-.133a1.401 1.401 0 0 1-1.284-.373c-.361-.469 0-1.058.349-1.407.4-.4.914-.625 1.323-1a1.767 1.767 0 0 0 .636-1.436 2.948 2.948 0 0 0-.842-1.748c-.168-.168-.432.108-.264.29.436.421.698.992.733 1.598ZM50.428 98.403c.12.23.17.488.145.745-.059.3-.173.586-.337.843-.175.267-.31.559-.4.865a1.71 1.71 0 0 0 .011.854 1.77 1.77 0 0 0 1.11 1.227 1.799 1.799 0 0 0 1.816-.409c.18-.168-.1-.445-.277-.277a1.41 1.41 0 0 1-1.515.289 1.399 1.399 0 0 1-.806-1.287c0-.613.47-1.094.674-1.635a1.74 1.74 0 0 0-.168-1.538 1.8 1.8 0 0 0-1.48-.891c-.24-.023-.24.374 0 .374a1.466 1.466 0 0 1 1.227.84ZM36.565 62.453a2 2 0 0 1-.036 1.49 3.989 3.989 0 0 1-.974 1.348c-.337.349-.721.854-.457 1.359.172.247.428.422.72.493.344.12.708.169 1.07.144.254-.012.254-.4 0-.385a2.62 2.62 0 0 1-.913-.12c-.216-.072-.54-.181-.565-.445a.977.977 0 0 1 .289-.625c.18-.2.385-.385.553-.59a2.777 2.777 0 0 0 .625-2.945 1.849 1.849 0 0 0-1.154-1.046.2.2 0 0 0-.108.384 1.534 1.534 0 0 1 .95.938ZM45.33 71.881a1.918 1.918 0 0 0-1.419 1.25c-.265.637-.325 1.419-.842 1.912a1.844 1.844 0 0 1-.974.433 2.733 2.733 0 0 1-1.082-.012 2.655 2.655 0 0 1-1.707-1.635c-.085-.229-.457-.132-.373.108.261.725.779 1.33 1.455 1.7a2.9 2.9 0 0 0 2.152.144c.367-.1.694-.31.938-.6.22-.289.388-.614.493-.962.205-.631.337-1.4.95-1.774a1.567 1.567 0 0 1 1.936.266c.156.18.433-.084.265-.277a1.935 1.935 0 0 0-1.792-.553ZM67.442 53.484c-.49.34-.94.73-1.346 1.167-.208.196-.459.34-.733.42-.37.083-.757.048-1.106-.1a2.57 2.57 0 0 1-.986-.588 2.609 2.609 0 0 1-.566-.983.194.194 0 0 0-.373.108 2.642 2.642 0 0 0 1.19 1.563 2.536 2.536 0 0 0 2.093.325 4.539 4.539 0 0 0 1.395-1.094 1.767 1.767 0 0 1 1.479-.637 1.561 1.561 0 0 1 1.3 1.13.2.2 0 0 0 .385-.108 1.93 1.93 0 0 0-2.732-1.203ZM32.513 78.578a4.184 4.184 0 0 1-.157 1.587 1.799 1.799 0 0 0 .252 1.382 1.43 1.43 0 0 0 1.155.553 1.626 1.626 0 0 0 1.275-.735c.144-.2-.192-.4-.337-.192a1.216 1.216 0 0 1-1.083.54 1.014 1.014 0 0 1-.89-.757c-.227-.939.541-1.949-.011-2.838a1.05 1.05 0 0 0-1.166-.514c-.226.06-.12.433.12.36.397-.132.754.252.842.614ZM54.793 56.862a3.699 3.699 0 0 1-.854 1.852 5.978 5.978 0 0 1-2 1.455 17.061 17.061 0 0 1-3.15 1.07c-1.637.484-3.36.61-5.05.373a5.524 5.524 0 0 1-2.834-1.408 7.6 7.6 0 0 1-1.467-2.1 2.407 2.407 0 0 1-.12-.253c-.108-.228-.445-.024-.337.192a9.671 9.671 0 0 0 1.443 2.222A5.66 5.66 0 0 0 43.25 61.9c1.655.341 3.366.296 5-.132a20.028 20.028 0 0 0 3.355-1.022 7.452 7.452 0 0 0 2.3-1.43 4.216 4.216 0 0 0 1.155-1.889 4.89 4.89 0 0 0 .045-2.285 5.92 5.92 0 0 0-.156-.625.188.188 0 1 0-.361.108c.23.722.3 1.486.205 2.237ZM76.407 52.006l7.816 19.964-.223.087-7.816-19.963.223-.088Z"
		/>
		<Path
			fill="#fff"
			d="m82.395 67.594.066.231-9.62 2.73-.066-.23 9.62-2.73Z"
		/>
		<Path
			fill="#F9D2DD"
			d="M79.42 55.767c-11.424-6.254-17.8-9.98-17.8-9.98a13.74 13.74 0 0 1-4.686-2.044c-1.563-1.324.421-8.24.421-8.24s-1.262-4.145-.66-4.506c.6-.36 1.44-.721 3.486 1.083a12.4 12.4 0 0 1 3.006 4.93s25.731 3.486 33.186 6.132c7.455 2.644 13.948 5.891 13.347 13.466-.601 7.575-8.417 6.614-8.417 6.614a66.5 66.5 0 0 1-21.884-7.456Z"
		/>
		<Path
			fill="#F9ACC0"
			d="M56.934 33.969c.2.842.421 1.539.421 1.539s-1.984 6.914-.42 8.237a9.997 9.997 0 0 0 2.837 1.49c1-1.274 2.393-3.57 1.912-6.12-.529-2.801-3.295-4.461-4.75-5.146Z"
		/>
		<Path
			fill="#F99A3D"
			d="M56.468 43.228c-1.968.245-3.805-1.56-4.113-4.031-.308-2.472 1.03-4.672 2.997-4.918 1.968-.245 3.806 1.56 4.114 4.031.308 2.471-1.034 4.673-2.998 4.918Z"
		/>
		<Path
			fill="#FF7F2D"
			d="M55.616 42.078c-1.425.097-2.679-1.276-2.8-3.065-.123-1.79.933-3.318 2.359-3.415 1.425-.097 2.678 1.275 2.8 3.063.122 1.789-.934 3.32-2.359 3.417Z"
		/>
		<Path
			fill="#F9D2DD"
			d="M34.63 42.722c-.337 3.4 5.17 4.81 5.17 4.81a53.241 53.241 0 0 1 1.563 7.094c.141 1.64.141 3.29 0 4.93a8.805 8.805 0 0 0 6.613.842c4.93-1.082 5.17-3.126 5.17-3.126l-1.924-7.936a6.817 6.817 0 0 0 4.45-5.531c.841-4.45-.6-9.86-.6-9.86l-6.133 1.2-1.924-1.682v2.044l-5.772 1.563-1.563-1.683s1.082 1.323.481 4.329c-.6 3.006-.962 3.126-.962 3.126l-.24-2.164s-3.844-2.886-4.329 2.044Z"
		/>
		<Path
			fill="#F9ACC0"
			d="M43.85 43.575c-1.366.25-2.596-.227-2.749-1.063-.152-.836.83-1.716 2.196-1.965 1.366-.249 2.596.227 2.749 1.063.152.837-.832 1.716-2.196 1.965Z"
		/>
		<Path
			fill="#1F1F39"
			d="M51.282 36.65a1.237 1.237 0 0 1 .794-.625 1.71 1.71 0 0 1 .493-.041c.169.01.334.06.48.144a.833.833 0 0 1 .458.806 1.226 1.226 0 0 0-.662-.272c-.1-.012-.2-.012-.3 0a.696.696 0 0 0-.156.022c-.06 0-.1.024-.144.024a.91.91 0 0 0-.253.1 1.025 1.025 0 0 0-.253.166 9.372 9.372 0 0 0-.517.577 1.127 1.127 0 0 1 .06-.901ZM43.635 38.275a1.218 1.218 0 0 1 .685-.652c.05-.012.081-.024.133-.036l.06-.013h.2c.04 0 .08.003.12.013.16.018.315.067.457.143a.968.968 0 0 1 .35.35c.036.071.06.148.071.227a.49.49 0 0 1-.01.23c-.095-.081-.2-.148-.313-.2a1.236 1.236 0 0 0-.287-.063h-.36c-.024 0-.04.01-.06.01h-.024l-.024.011c-.012 0-.036.012-.048.012-.172.074-.33.175-.469.3-.192.145-.36.325-.589.505a1.353 1.353 0 0 1 .108-.837ZM49.684 38.417c.135.11.256.234.36.373.115.144.193.313.229.493a.777.777 0 0 1-.012.29.427.427 0 0 1-.048.131.324.324 0 0 1-.06.132.988.988 0 0 1-.373.4 1.45 1.45 0 0 1-.986.2c.317-.056.617-.184.878-.373a.754.754 0 0 0 .264-.35.495.495 0 0 0 .036-.1.37.37 0 0 0 .024-.1.58.58 0 0 0 0-.2 1.041 1.041 0 0 0-.168-.4c-.09-.13-.19-.25-.3-.362a5.347 5.347 0 0 0-.71-.639c.314.121.606.291.866.505Z"
		/>
		<Path
			fill="#F95368"
			d="M49.43 41.893a5.109 5.109 0 0 0 2.105-.842s.818 2.657-.1 3.57c-.918.915-3.266 1.059-3.88-.612-.612-1.671-.408-2.044-.408-2.044.76.096 1.531.071 2.284-.072Z"
		/>
		<Path
			fill="#F9ACC0"
			d="M51.762 43.992a3.42 3.42 0 0 0-2.055-.08c-.6.161-1.15.47-1.6.9a2.717 2.717 0 0 0 3.32-.19c.163-.179.278-.395.335-.63ZM40.16 39.728c-.6 3.006-.961 3.126-.961 3.126l-.24-2.164a2.673 2.673 0 0 0-.3-.192l-2.43 5.35a11.321 11.321 0 0 0 3.57 1.683s.12.4.278 1.022a9.738 9.738 0 0 0 1.952-4.377 5.494 5.494 0 0 0-1.7-5.711 8.718 8.718 0 0 1-.169 1.263Z"
		/>
		<Path
			fill="#F99A3D"
			d="M38.583 47.507c-2.18.148-4.097-1.95-4.282-4.687-.186-2.737 1.43-5.075 3.61-5.222 2.18-.148 4.098 1.95 4.283 4.687.186 2.737-1.43 5.074-3.61 5.222Z"
		/>
		<Path
			fill="#FF7F2D"
			d="M38.058 45.563c-1.425.097-2.677-1.276-2.798-3.065-.122-1.789.934-3.316 2.36-3.413 1.424-.096 2.677 1.276 2.798 3.064.12 1.788-.935 3.318-2.36 3.414Z"
		/>
		<Path
			fill="#F99A3D"
			d="M34.99 28.291a13.045 13.045 0 0 0-1.683 6.614 19.764 19.764 0 0 0 .484 4.81l2.754-1.2s-.854-5.715.489-9.02a8.718 8.718 0 0 1 3.09-3.96c.073-.049.518-.338.89-.542.12-.06.229-.108.314-.156l.4-.156s.589-.349 1.082-.6a16.963 16.963 0 0 1 1.8-.72 7.562 7.562 0 0 0-5.05.24 10.322 10.322 0 0 0-4.57 4.69Z"
		/>
		<Path
			fill="#1F1F39"
			d="M45.054 105.846c-2.056-.433-4.317-1.13-5.411-2.91-.794-1.287-.89-2.994-.3-5.194.637-2.393 2.729-4.389 5.146-6.7 3.15-3.006 6.72-6.42 8.08-11.7 1.78-6.926-4.485-12.024-9.042-15.752a29.74 29.74 0 0 1-3.655-3.27c-1.383-1.632-2.14-4.337-2.237-8.017-.04-1.68.044-3.36.253-5.026a.243.243 0 0 1 .277-.208.252.252 0 0 1 .2.277c-.008.087-1.271 8.961 1.868 12.677a29.609 29.609 0 0 0 3.583 3.21c4.665 3.8 11.062 9.018 9.21 16.244-1.383 5.411-5.014 8.874-8.212 11.928-2.37 2.236-4.413 4.184-5.014 6.457-.553 2.068-.47 3.655.253 4.822.794 1.3 2.32 2.1 5.1 2.693 2.261.492 4.582.654 6.89.481a.238.238 0 0 1 .092.006c.03.009.058.023.082.042a.236.236 0 0 1-.114.421 13.92 13.92 0 0 1-1.756.084 25.73 25.73 0 0 1-5.293-.565Z"
		/>
		<Path
			fill="#1F1F39"
			d="M49.297 68.874a.244.244 0 0 1 .037-.337c.072-.06 7.106-5.723 9.112-12.661 1.171-4.294.837-8.86-.947-12.937a.244.244 0 0 1 .107-.325.242.242 0 0 1 .325.108 19.961 19.961 0 0 1 .975 13.275c-2.044 7.082-9.2 12.84-9.271 12.9a.157.157 0 0 1-.145.073.252.252 0 0 1-.193-.096ZM46.725 87.895l.42-.42a.96.96 0 1 1 1.36 1.358l-.422.421a.96.96 0 0 1-1.358-1.359Z"
		/>
		<Path
			fill="#F9ACC0"
			d="M51.295 49.659c.048-.192-1.515.408-3.199.408-2.777 0-3.727-.6-3.727-.6s2.645 3.367 5.411 4.449c.872.345 1.786.575 2.717.685l-1.202-4.942Z"
		/>
		<Path
			fill="#1F1F39"
			d="M43.972 49.442a.109.109 0 0 1-.06-.06.111.111 0 0 1 .145-.145c1.287.499 2.66.74 4.04.71 1.061-.027 2.113-.201 3.126-.519a.113.113 0 0 1 .123.033c.01.012.017.025.021.04a.11.11 0 0 1-.005.087.112.112 0 0 1-.067.056 11.05 11.05 0 0 1-3.2.53h-.3a11.344 11.344 0 0 1-3.823-.732Z"
		/>
		<Path
			fill="#EAEAFF"
			d="M52.244 107.532a1.39 1.39 0 0 1-1.383-1.383 1.39 1.39 0 0 1 1.383-1.383h19a1.39 1.39 0 0 1 1.28 1.913 1.381 1.381 0 0 1-.75.75 1.378 1.378 0 0 1-.53.103h-19Z"
		/>
		<Path
			fill="#1F1F39"
			d="m23.205 72.18-1.924 13.707 1.924-13.707ZM21.272 86.008a.114.114 0 0 1-.08-.044.112.112 0 0 1-.02-.088l1.926-13.706a.116.116 0 0 1 .228.037l-1.924 13.706a.129.129 0 0 1-.12.1l-.01-.005Z"
		/>
		<Path
			fill="#F9D2DD"
			d="M26.696 38.032a12.317 12.317 0 0 1 4.687-4.93c1.323-.361 1.683.48 1.683.48a2.149 2.149 0 0 1 1.924-.48 1.73 1.73 0 0 1 1.082 1.323 1.775 1.775 0 0 1 1.924-.121c.842.48.6 1.683 0 2.4-.6.717-2.4 2.044-2.525 2.766s3.006 8.417 1.563 13.587c-1.443 5.17-13.106 25.616-18.517 32.349-5.411 6.733-12.385 5.772-14.55 4.089a10.081 10.081 0 0 1-2.644-12.983c3.366-6.5 25.373-29.582 25.373-29.582s-.844-6.854 0-8.898Z"
		/>
		<Path
			fill="#1F1F39"
			d="M32.477 42.625c-.036-.168-.842-4.28.505-5.748a17.592 17.592 0 0 1 3.03-2.549.108.108 0 0 1 .127.002c.012.01.022.021.029.034a.106.106 0 0 1-.002.127.108.108 0 0 1-.034.03 18.191 18.191 0 0 0-2.982 2.5c-1.274 1.387-.457 5.508-.457 5.556a.11.11 0 0 1-.088.131c0 .012-.012.012-.024.012a.114.114 0 0 1-.104-.095ZM28.99 40.93c-.013-.132-.226-3.307.865-4.653a19.313 19.313 0 0 1 3.15-2.79.114.114 0 0 1 .16.024.114.114 0 0 1-.028.155c-1.128.8-2.167 1.72-3.1 2.74-1.048 1.277-.819 4.46-.819 4.488a.135.135 0 0 1-.12.144.106.106 0 0 1-.077-.031.11.11 0 0 1-.032-.077ZM71.784 64.004l1.8 11.062-1.8-11.062ZM73.479 75.093l-1.805-11.066a.119.119 0 0 1 .1-.134.119.119 0 0 1 .13.1l1.8 11.062a.12.12 0 0 1-.1.132h-.016a.099.099 0 0 1-.099-.055.1.1 0 0 1-.01-.039Z"
		/>
		<Path
			fill="#fff"
			d="M48.192 42.576a.245.245 0 0 0 .188.215.243.243 0 0 0 .1.001l1.179-.194a9.516 9.516 0 0 0 1.178-.31.258.258 0 0 0 .216-.3l-.131-.59a6.236 6.236 0 0 1-1.5.493 7.316 7.316 0 0 1-1.29.12l.06.565Z"
		/>
		<Path
			fill="#F9ACC0"
			d="M.505 78.434a10.065 10.065 0 0 0 3.463 11.062c2.164 1.683 9.138 2.645 14.549-4.088a51.08 51.08 0 0 0 1.768-2.37c-2.61 1.733-7.888 4.39-13.431 2.25a10.187 10.187 0 0 1-6.35-6.854ZM54.596 37.9c-1.354.253-2.34 1.136-2.184 1.973.156.837 1.384 1.323 2.742 1.07.268-.05.53-.125.782-.228a26.303 26.303 0 0 0-.17-2.85 3.846 3.846 0 0 0-1.17.036Z"
		/>
	</Svg>
);
export default CategoryVariant1Svg;

