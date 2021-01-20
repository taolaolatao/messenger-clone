import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
	useIonViewDidEnter,
	useIonViewWillEnter,
	useIonViewDidLeave,
	useIonViewWillLeave,
} from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { API } from '../services/api';
import { AxiosResponse } from 'axios';

const URL = 'https://opentdb.com/api.php?amount=10';

const Home: React.FC = () => {
	useIonViewDidEnter(async () => {
		// API.request<ResponseCustom>({
		// 	url: URL,
		// })
		// 	.then((resp) => {
		// 		if (resp.status === 200) {
		// 			const { results } = resp.data;
		// 			console.log(results);
		// 		}
		// 	})
		// 	.catch((err) => console.error(err));

		const resp: AxiosResponse<ResponseCustom> = await API(URL).catch(
			(err) => err
		);

		if (resp.data) {
			console.log(resp.data.results);
		}

		console.log('ionViewDidEnter event fired');
	});

	useIonViewDidLeave(() => {
		console.log('ionViewDidLeave event fired');
	});

	useIonViewWillEnter(() => {
		console.log('ionViewWillEnter event fired');
	});

	useIonViewWillLeave(() => {
		console.log('ionViewWillLeave event fired');
	});

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Blank</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">Blank</IonTitle>
					</IonToolbar>
				</IonHeader>
				<ExploreContainer />
			</IonContent>
		</IonPage>
	);
};

export default Home;
