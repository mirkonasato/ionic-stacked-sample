import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React from 'react';
import { useRouteMatch } from 'react-router';
import { items } from '../data';

interface RouteParams {
  itemId: string;
}

const ItemPage: React.FC = () => {
  const { params: { itemId } } = useRouteMatch<RouteParams>();
  const item = items.find((it) => it.id === itemId)!;
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>{item.title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <IonLabel position="stacked">Description</IonLabel>
          <IonInput value={item.description} />
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default ItemPage;
