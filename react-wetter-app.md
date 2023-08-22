# React Wetter-App Schritt für Schritt Anleitung

## Repository Erstellen und klonen

### **Repository erstellen**

Jedes Coding-Projekt beginnt mit einem Repository.  
* Gehe auf [github.com](https://github.com/), logge dich gegebenenfalls ein und drücke auf den grünen **New**-Button.
* Gib dem Repository einen Namen, z.B. `react-wetter`.
* Entscheide dich, ob das Repository öffentlich oder privat sein soll, wenn du es öffentlich machst, pass auf, dass du keine urheberrechtlich geschützten Inhalte verwendest!
* Aktiviere die Checkbox **Add a README file**, damit sich in dem Repository bereits Daten befinden, ansonsten ist die initiale Befüllung etwas mühsamer.
* Drücke den grünen **Create repository**-Button.

### **Repository klonen**

Du gelangstauf die Übersichtsseite des neu erstellten Repositories.
* Drücke den grünen **Code**-Button.
* Wähle den Reiter **SSH** (wenn er nicht bereits gewählt ist), und kopiere die angezeigte URL (mit dem Button rechts davon).

#### **Mit Sourcetree**

* Öffne Sourcetree.
* Ganz oben in Sourcetree ist eine Tab-Leiste, rechts vom letzten Tab ist ein **+**-Button, drücke ihn.
* Wähle anschließend den Button **Clone**.
* Bei **Source Path / URL** füge die kopierte SSH URL ein.
* Wähle bei **Destination Path** den Ordner am PC, in welchen das Repository geklont werden soll.
* Das **Name** Feld sollte automatisch befüllt werden, wenn nicht, stelle sicher, dass es den selben Namen trägt, wie das Repository, in unserem Beispiel also `react-wetter`.
* Drücke den blauen **Clone**-Button

#### **Alternativ mit der Kommandozeile**

Folge diesen Schritten nur, wenn du das Repository **nicht** über Sourcetree geklont hast!
* Öffne die **Git Bash** Kommandozeile und navigiere in den Ordner, in dem du das Repository klonen möchtest.
* Gib den Befehl `git clone <URL>` ein, wobei `<URL>` durch die kopierte SSH URL zu ersetzen ist.

### **Projekt in VS Code Öffnen**

Wer eine andere IDE verwendet, muss diesen Schritt selbst herausfinden ;)

* Öffne VS Code
* Drücke **File** -> **Add Folder to Workspace...** und wählt den Ordner des Repositories aus.
* Der Ordner sollte nun in eurem Workspace sichtbar sein (erster Reiter in der vertikalen Tab-Leiste auf der linken seite).
* Drückt mit der rechten Maustaste auf den `react-wetter` Ordner und wählt **Open in integrated terminal**, es sollte unten ein Terminal erscheinen, welches bereits in den repository-Ordner navigiert ist.
* Stellt sicher, dass ihr im richtigen Ordner seid, der angezeigte Pfad sollte mit `react-wetter` enden.

### **Vite Framework initialisieren**

Das [Vite Framework](https://vitejs.dev/guide/) hilft dabei, React lokal auszuführen und später für die Produktivnutzung zu bauen.

* Führt im Projektordner im Terminal den Befehl `npm create vite@latest . -- --template react` aus, um ein React-Projekt mit vite zu initialisieren. Bestätigt dabei,d ass bestehende Dateien im Projektordner gelöscht werden dürfen (das betrifft die Readme Datei!).
* Führe den Befehl `npm install` aus, um alle Abhängigkeiten zu installieren.

### **Weitere Libraries installieren**

* [Material UI](https://mui.com/material-ui/getting-started/installation/) ist ein Framework, das uns fertige UI-Komponenten speziell für React zur verfügung stellt. Um es zu installieren, führe den Befehl `npm install @mui/material @emotion/react @emotion/styled @mui/icons-material` aus.
* Der [React Router](https://reactrouter.com/en/main/start/tutorial) erlaubt es uns, mit React zwischen verschiendenen Seiten (URLs) zu wechseln und dabei unterschiedliche Inhalte anzuzeigen. Wir installieren ihn mit `npm install react-router-dom`
* Die [nivo](https://github.com/plouc/nivo) Library wird genutzt um Charts und Graphen zu zeichnen, die Dokumentation ist leider nicht die beste, ihr könnt es also gerne auch mit einer anderen Library versuchen. nivo wird mit `npm install @nivo/core @nivo/line` installiert (Wollt ihr einen anderen Chart-Typen als den Line-Chart, müsst ihr den Typen ggf. separat installieren).

### **Projekt lokal ausführen**

* Um den lokalen Server für das Projekt zu starten, gib `npm run dev` ein.
* Um den lokalen Server später wieder zu stoppen, könnt ihr im Terminal wo der Server läuft einfach die Taste `q` drücken.
* Der Server läuft unter der URL [http://localhost:5173/](http://localhost:5173/), die könnt ihr jetzt im Browser öffnen.
* Ihr solltet jetzt eine Begrüßungsseite mit zwei Logos und der Schrift **Vite + React** sehen können. Das ist der Demo-Code, den Vite bereits mitbringt.

### **Vite Demo-Code auf das nötigste reduzieren - die Basis für jedes neue React Projekt**

* Wir löschen die Dateien
  * `public/vite.svg`
  * `src/assets/react.svg`
  * `src/App.css`
* Die Webseite wird nun wahrscheinlich einen Fehler anzeigen, das liegt daran, dass wir Dateien gelöscht haben, die noch verwendet werden. Daher müssen wir im Code nun auch entsprechende Änderungen vornehmen. Dabei versäubern wir den Code auch noch:

**src/main.jsx**  
Dies ist der haupt Einstiegspunkt in React, hier wird React initialisiert und ins DOM geladen. Wir ergänzen hier fehlende Semikolon an den Zeilenenden. Später müssen wir in dieser Datei den React Router einbinden.
```javascript
/* src/main.jsx */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
```

**src/index.css**  
Diese Datei beinhaltet Stile und wird von der `src/main.jsx` geladen.  
Den Inhalt dieser Datei benötigen wir nicht länger, jedoch werden wir hier später andere CSS Stile hinterlegen. Daher leeren wir die Datei vollständig aus, ohne sie zu löschen:
```css
/* src/index.css */
/* Add CSS Styles here */
```

**src/App.jsx**  
Diese Komponente wird von der `src/main.jsx` geladen und angezeigt. Wir entfernen überflüssige Imports und reduzieren das angezeigte HTML auf ein `Hello World`, zudem ergänzen wir fehlende Semikolon. Das `export default` schreibe ich gerne direkt vor die Funktion:
```javascript
/* src/App.jsx */
export default function App() {
  return (
    <p>
      Hallo Welt
    </p>
  );
}
```

Nun sollten wir auf der Webseite das `Hallo Welt` lesen können.

### **Standortauswahl mit der Geocoding API**

#### **Nutzereingabe**

Damit der Nutzer einen Standort eingeben kann, benötigen wir ein Text-Feld, dieses nehmen wir von Material UI ([TextField](https://mui.com/material-ui/react-text-field/)), da es bereits in schöner Optik und mit hilfreichen Funktionen zum verarbeiten daher kommt.  
Wir müssen die Komponente von Material UI importieren und in unsere App Komponente einbauen:  
```javascript
/* src/App.jsx */
import TextField from '@mui/material/TextField';

export default function App() {
  return (
    <>
      <TextField
        label="Standort"
      />
    </>
  );
}
```
Wir benötigen im Code zugriff auf den Text, den der Nutzer eingibt, dazu müssen wir die Material UI Komponente zu einer sogenannten Controlled Component. Das bedeutet, dass wir ein Event bekommen, wenn sich die Eingabe ändert, wir aber auch kontrollieren müssen, was die Komponente (das Text Feld) anzeigt. Dazu müssen die Attribute `value` (angezeigter Wert) und `onChange` (change Event-Listener) gesetzt werden. Der angezeigte Wert muss in unserer App Komponente im State gespeichert werden. Speichern wir Werte im State, so wird die Komponente neu gezeichnet, sobald sich der Wert verändert.

Um etwas im State speichern zu können, müssen wir den `useState` Hook von React verwenden, diesen müssen wir importieren und in unserer App Funktion (Komponente) verwenden. Beim Aufruf des Hooks bekommen wir (als Array) den im State gespeicherten Wert, sowie eine Funktion um den Wert zu verändern. Mittels [Array-Matching](http://es6-features.org/#ArrayMatching) werden die beiden Array-Elemente in Variablen gespeichert (deren Namen wir frei wählen können). Der Parameter, welcher der `useState` Funktion übergeben wird, ist der Initialwert, der im State gespeichert werden soll (in diesem Fall ein leerer String):  
```javascript
const [location, setLocation] = useState('');
```
Um das `useState` verwenden zu können, muss es aber vorher erst importiert werden:  
```javascript
import { useState } from 'react';
```
Nun können wir auch die `value` und `onChange` Attribute des `TextField` setzen, der `value` wird mit unserem Wert aus dem State befüllt, in der `onChange` Funktion müssen wir den State verändern. Der eingegebene Wert des Textfeldes befindet sich im `event` Parameter in `event.target.value`:  
```javascript
<TextField
  label="Standort"
  onChange={(event) => {
    setLocation(event.target.value);
  }}
  value={location}
/>
```
Die gesamte Datei sollte jetzt wie folgt aussehen:
```javascript
/* src/App.jsx */
import { useState } from 'react';
import TextField from '@mui/material/TextField';

export default function App() {
  const [location, setLocation] = useState('');
  return (
    <>
      <TextField
        label="Standort"
        onChange={(event) => {
          setLocation(event.target.value);
        }}
        value={location}
      />
    </>
  );
}
```
Wir sehen zwar jetzt noch keine Änderung, würden wir uns aber die Variable `location` loggen lassen, könnten wir dort die Nutzereingabe auslesen.

**Ab jetzt zeige ich nur noch Zeilen, die im Code verändert/hinzugefügt werden, nicht mehr vollständige Dateien! Ihr solltet nun bereits selbst verstehen, wo welcher Code einzufügen ist!**

Wir bnenötigen nun eine Taste, um die Nutzereingabe abzusenden, und von der [Geocoding API](https://open-meteo.com/en/docs/geocoding-api) Daten abzufragen.

Dazu fügen wir neben dem Textfeld einen [Button](https://mui.com/material-ui/react-button/) (von Material UI) ein. Dieser muss natürlich erst importiert werden (kleiner Tipp: bei den Code-Beispielen auf Material UI gibt es immer den **<>**-Button, der ein komplettes Code-Beispiel zeigt, inklusive des benötigten Imports):
```javascript
import Button from '@mui/material/Button';
```
Den Button müssen wir unter ddem TextField einfügen, und das `onClick` Attribut setzen, damit wir mitbekommen, wenn er gedrückt wird.
```javascript
<Button
  onClick={() => {
    // TODO: handle click
  }}
>Senden</Button>
```

#### **Daten von der Geocoding API abfragen**

Um die Daten von der [Geocoding API](https://open-meteo.com/en/docs/geocoding-api) abzufragen, müssen wir diese aufrufen, und den eingegebenen Ortsnamen mit senden.  
Die API wird mit GET-Request über die URL `https://geocoding-api.open-meteo.com/v1/search?name=<LOCATION>` aufgerufen, wobei `<LOCATION>` durch den Namen des gesuchten Ortes zu ersetzen ist. Wir können die URL auch einmal im Browser aufrufen, beispielsweise für den Ort [Linz](https://geocoding-api.open-meteo.com/v1/search?name=Linz). Hier sehen wir bereits wie die Antwort des Servers aufgebaut ist. Die für uns relevanten Daten befinden sich im JSON-Objekt im Attribut `results`.  
Die Abfrage der Daten können wir direkt im `onClick` handler machen, dadurch wird dieser aber **asynchron**. Da der Ort als URL-Parameter an den Server geschickt wird, müssen Sonderzeichen (wie z.b. Leerzeichen) URL-tauglich gemacht werden, dazu wird die Funktion `encodeURIComponent` genutzt. Anschließend wird der Server mit der `fetch` Funktion angesprochen, und das Ergebnis als JSON interpretiert. Das ganze sollte in einem `try-catch` Block geschehen, um eventuelle Fehler abzufangen (wir geben im Fehlerfall den Fehler auf der Console aus). Wir holen uns bereits die Relevanten Daten aus dem JSON Objekt (`results`-Attribut und speichern die Ergebnisse im State):
```javascript
const [results, setResults] = useState([]);
```
```javascript
<Button
  onClick={async () => {
    try {
      const cleanLocation = encodeURIComponent(location.trim());
      const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${cleanLocation}`);
      const data = await response.json();
      setResults(data.results);
    } catch(err) {
      console.error(err);
    }
  }}
>Senden</Button>
```
Würden wir nun die Variable `results` loggen, sollten wir die vom Server zurückgegebenen Orte sehen können.

#### **Ergebnisse der Geocoding API anzeigen**

Damit der Nutzer die Ergebnisse sehen kann, müssen wir diese als HTML ausgeben lassen. Um eine Liste von Elementen anzeigen zu lassen, eignen sich die `List` oder `Table` Komponenten von Material UI. In diesem Beispiel verwende ich [List](https://mui.com/material-ui/react-list/), da `Table` deutlich komplizierter zu verwenden ist.  
Die `List` Komponente sollte alle Listen Einträge (`ListItem`) umschließen. Jedes Ergebnis von der API sollte als einzelnes `ListItem` dargestellt werden. Die Komponente `ListItemButton` Sorgt dafür, dass der Listeneintrag beim darüberfahren mit der Maus ein Highlight bekommt und sich der Maus-Cursor ändert, so dass es den Anschein macht, dass der Eintrag klickbar ist. `ListItemText` gibt letztendlich den Titel des Eintrags aus. **Stelle selbst sicher, dass du die benötigten Komponenten importierst!**  
Zum zeichnen der einzelnen `ListItem` müssen wir über die Ergebnisse der Geocoding API iterieren. Für jedes Element in den `results` muss ein Eintrag gezeichnet werden, wir müssen also ein Array von `ListItem` erzeugen. Dazu eignet sich die [Array.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map?retiredLocale=de) funktion, die es uns erlaubt, jedes Element aus einem Array in ein anderes umzuwandeln, so dass wir am Ende wieder ein Array mit (umgewandelten) Objekten erhalten. Die Callback-Funktion des `Array.map()` wird für jeden Eintrag im Array aufgerufen, und wir müssen das Umgewandelte Objekt in diesr Callback-Funktion zurückgeben.  
Um zu entscheiden, welche Felder der Einträge wir in der Liste anzeigen, sollten wir uns nochmal das Ergebnis vom Server ansehen. Ich habe mich für die Felder `name`, `country` und `admin1` entschieden (aber Achtung, `admin1` ist nicht immer gesetzt!). Aber auch `id` werden ich verwenden, da wir in React immer ein eindeutiges `key` Attribut brauchen, wenn wir Komponenten als Array ausgeben lassen.
```javascript
<List>
  { results.map((location) => {
    return (
      <ListItem key={location.id}>
        <ListItemButton>
          <ListItemText
            primary={location.name}
            secondary={location.admin1 ? `${location.admin1}, ${location.country}` : location.country}
          />
        </ListItemButton>
      </ListItem>
    );
  }) }
</List>
```
Nun solltet ihr die Ergebnisse als Liste angezeigt bekommen.

### **React Router einbinden**

#### **Router initialisieren und Routes hinzufügen**

Bevor wir die Listeneinträge klickbar machen können, müssen wir nun endlich den [React Router](https://reactrouter.com/en/main/start/tutorial) einbinden.  
Dazu sind nun einige Änderungen in der `src/main.jsx` notwendig.  
Zunächst müssen die entsprechenden Komponenten/Funktionen importiert werden:  
```javascript
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
```
Es folgt die Definition der routes (direkt unter den Imports auf äußerster Ebene der `src/main.js`):  
```javascript
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);
```
Und weiter unten in der `render` Funktion muss die `App`-Komponente durch den `RouterProvider` ausgetauscht werden, damit nicht immer die App-Komponente gerendert wird, sondern der Router entscheiden kann, weas angezeigt wird:  
```javascript
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
```
Nun benötigen wir eine zweite Komponente, welche später das Wetter für den gewählten Ort anzeigt, dazu erstellen wir eine neue Datei `src/Weather.jsx`. Um den Inhalt werden wir uns später kümmern:  
```javascript
/* src/Weather.jsx */
export default function Weather() {
  return (
    <p>
      Hallo Wetter
    </p>
  );
}
```
Diese Komponente wollen wir nun zum Router hinzufügen, so dass diese Seite auch erreicht werden kann. Dazu muss die Komponente im `src/main.jsx` importiert werden:  
```javascript
import Weather from './Weather.jsx';
```
Anschließend erstellen wir eine neue Route für diese Komponente, wir möchten dabei die Koordinaten, bestehend aus Längen- und Breitengrad, in der URL übergeben können, daher erstellen wir eine URL mit entsprechenden Parametern `lat` (latitude) und `lng` (longitude):
```javascript
{
  path: "/:lat/:lng",
  element: <Weather />,
},
```
Wenn wir jetzt beispielsweise auf [http://localhost:5173/48/14](http://localhost:5173/48/14) navigieren, sollten wir die Ausgabe `Hallo Wetter` sehen können.  
Koordinaten bestehen aber nicht aus ganzen Zahlen, sondern beinhalten im allgemeinen auch Nachkommastellen. Navigieren wir aber auf [http://localhost:5173/48.31/14.29](http://localhost:5173/48.31/14.29), so werden wir mit einer Fehlermeldung begrüßt. Das liegt daran, dass Punkte in URLs eigentlich reserviert sind, wir sollten sie daher vorher durch andere Zeichen (z.B. Unterstriche) ersetzen, z.B. [http://localhost:5173/48_31/14_29](http://localhost:5173/48_31/14_29). Das sollten wir uns für später merken.

#### **Listen Eintrag anklicken**

Jetzt wollen wir die Listen-Einträge auf unserer Hauptseite endlich auch anklicken können, dazu benötigen wir das `onClick`-Attribut am `ListItemButton` um mitzubekommen, wenn ein bestimmter Eintrag angeklickt wurde.  
Beim Klicken eines Eintrags, möchten wir auf eine andere Seite navigieren, dazu benötigen wir den `useNavigate` Hook von React Router, mit dem wir eine Funktion zum wechseln der Seite/URL bekommen:  
```javascript
import { useNavigate } from 'react-router-dom';
```
```javascript
const navigate = useNavigate();
```
Im `onClick` Event können wir die `navigate` Variable (welche eine Funktion beinhaltet) nun benutzen, um auf eine andere Seite zu navigieren. Die URL bauen wir uns aus den `latitude` und `longitude` Attributen des Listeneintrags zusammen, ersetzen dabei aber auch den `.` durch ein `_`. Dabei müssen wir beachten, dass die Werte vom Typ Number sind, wir müssen sie also erst in einen String umwandeln:
```javascript
onClick={() => {
  const lat = location.latitude.toString().replace('.', '_');
  const lng = location.longitude.toString().replace('.', '_');
  navigate(`/${lat}/${lng}`);
}}
```
Wenn wir alles richtig gemacht haben, sollten wir bei der Auswahl von `Linz` auf [http://localhost:5173/48_30639/14_28611](http://localhost:5173/48_30639/14_28611) geleitet werden, und `Hallo Wetter` sehen können.

#### **Router Parameter auslesen**

Um in der `src/Weather.jsx` das Wetter für den gewählten Standort anzeigen zu können, müssen wir die Parameter aus der URL auch wieder auslesen. Dazu können wir den `useParams` Hook vom React Router verwenden, diesen müssen wir importieren und können bei der Benutzung mittels [Object-Matching](http://es6-features.org/#ObjectMatchingShorthandNotation) direkt den `lat` und `lng` Parameter auslesen. Dabei ist es wichtig, dass die Variablen hier genauso benannt werden, wie in der Route-Definition.
```javascript
import { useParams } from "react-router-dom";
```
```javascript
const { lat, lng } = useParams();
```
Wir sollten anschließend den `_` in den Koordinaten wieder durch einen `.` ersetzen, um die Koordinaten verarbeiten zu können:
```javascript
const latitude = lat.replace('_', '.');
const longitude = lng.replace('_', '.');
```

#### **API Call beim Seitenaufruf**

Wird die `Weather` Komponente aufgerufen, sollen die Koordinaten sofort verwendet werden, um das Wetter für diesen Standort von der [Weather Forecast API](https://open-meteo.com/en/docs) abzufragen.
Ein API Call ist allerdings asynchron, und sollte nicht bei jedem neu Zeichnen der Komponente neu abgefragt werden. Fir können den `fetch` Aufruf also nicht direkt in der `Weather` Funktion machen, stattdessen müssen wir einen `useEffect` Hook von React verwenden. Dieser wird nur einmal Initial und anschließend nur wenn sich bestimmte Abhängigkeiten ändern erneut ausgeführt.
Den `useEffect`-Hook müssen wir importieren:
```javascript
import { useEffect } from "react";
```
Anschließend wird er in der `Weather` Funktion (unterhalb unserer Koordinaten Variablen) eingebunden. Auch die Callback Funktion (erster Parameter) von `useEffect` darf noch nicht asynchron sein, daher müssen wir dort etwas tricksen und erstellen innerhalb eine asynchrone Funktion, welche wir anschließend sofort ausführen. Der zweite Parameter von `useEffect` sind die Abhängigkeiten in Form eines Arrays. Immer wenn sich eine dieser Abhängigkeiten ändert, wird die Callback-Funktion erneut ausgeführt. Bei uns sollte das immer dann passieren, wenn sich die Koordinaten verändern. Zudem nutze ich eine Variable `loading` im State der Komponente um zu speichern, ob gerade Daten geladen werden. Die Daten vom Server müssen ebenfalls im State gespeichert werden, ich nutze hierfür `weatherData`. **Diese State Variablen müsst ihr selbst initialisieren (`useState` Hook)!**
```javascript
useEffect(
  () => {
    async function loadData() {
      try {
        setLoading(true);
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m`);
        const data = await response.json();
        setWeatherData(data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    }

    loadData();
  },
  [latitude, longitude]
);
```
Um einen Ladevorgang optisch darzustellen, eignet sich die `CircularProgress` Komponente von React.
```javascript
if (loading) {
  return (
    <CircularProgress />
  );
}

return (
  <p>
    Hallo Wetter
  </p>
);
```
Während die Daten vom Server laden sollte nun die Ladeanzeige sichtbar sein (unter Umständen nur für wenige Millisekunden), anschließend wieder das `Hallo Wetter`. Ob die Daten wirklich richtig geladen werden, könnt ihr in den Entwickler-Tools des Browsers im `Netzwerk` Tab nachverfolgen. Wichtig ist, dass die Entwickler-Tools geöffnet sind während der Request geschickt wird, sonst wird er dort nicht angezeigt! Gegebenenfalls könnt ihr nach dem Öffnen der Entwickler-Tools die Seite neu laden. Seht euch beim `forecast` Request den `Preview` Tab an, dort seht ihr, wie die Daten aussehen, die vom Server zurück kommen und nun im State gespeichert sein sollten. Ihr könnt sie alternativ natürlich auch einfach loggen lassen.

### **Chart mit der nivo-Library zeichnen**

Wenn wir uns die Daten von der API ansehen, finden wir im `hourly` Attribut zwei Arrays `temperature_2m` & `time`. Die Daten dieser beiden Arrays müssen wir für die Verwendung in der nivo-Library kombinieren. Dazu müssen wir über eines der beiden Arrays iterieren, und es zusammen mit der selben Array-Stelle des anderen Arrays zu Objekten mit `x` und `y` Attributen kombinieren. Vorher sollten wir allerdings prüfen, ob die Objekte, die wir abfragen möchten überhaupt existieren. Die Daten müssen anschließend für den Chart in ein Objekt mit einer `id` verpackt werden. Dieses können wir vorbereiten und die Chart Daten einfügen, sofern alle benötigten Objekte verfügbar sind:
```javascript
const chartData = {
  id: 'Temperatur',
  data: [],
};

if (
  weatherData && weatherData.hourly &&
  Array.isArray(weatherData.hourly.time) &&
  Array.isArray(weatherData.hourly.temperature_2m)
) {
  const chartEntries = weatherData.hourly.time.map((time, i) => ({
    x: new Date(time),
    y: weatherData.hourly.temperature_2m[i],
  }));

  chartData.data = chartEntries;
}
```
Zur Anzeige des Charts brauchen wir von nivo die `ResponsiveLine` Komponente, diese muss importiert werden:
```javascript
import { ResponsiveLine } from '@nivo/line';
```
Die nivo-Library benötigt zur Anzeige von Charts einen Container mit einer fix gesetzten Größe, daher umschließe ich sie mit einem `div` mit entsprechendem Stil. Die Chart Daten müssen als Array übergeben werden (da die Komponente mehrere Linien gleichzeitig anzeigen könnte):
```javascript
return (
  <div
    style={{
      padding: 10,
      width: '80vw',
      height: '80vh',
      boxSizing: 'border-box',
    }}
  >
    <ResponsiveLine
      data={[chartData]}
    />
  </div>
);
```
Wir sollten den Chart nun bereits sehen können, allerdings noch ohne jegliche Beschriftungen.

Genau hier hat nun die Bastelarbeit begonnen, da ich keine vernünftige Dokumentation der nivo-Library gefunden habe. An dieser Stelle hätte ich mich normalerweise für eine andere Library entschieden, da ich aber diese vorgegeben habe, habe ich es versucht zu lösen. Aus Beispielen und mit viel Recherche und Source-Code lesen, bin ich zur folgenden Lösung zum styling des Charts gekommen:
```javascript
<ResponsiveLine
  data={[chartData]}
  margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
  xScale={{
    type: 'time',
  }}
  xFormat={(time) => {
    return time.toLocaleString('de-DE');
  }}
  yScale={{
    type: 'linear',
    min: -30,
    max: 50,
    stacked: true,
    reverse: false
  }}
  yFormat=" >-.2f"
  axisTop={null}
  axisRight={null}
  axisBottom={{
    tickSize: 5,
    tickPadding: 5,
    tickRotation: 30,
    tickValues: 'every day',
    format: (time) => time.toLocaleDateString('de-DE'),
    legend: 'Zeit',
    legendOffset: 36,
    legendPosition: 'left'
  }}
  axisLeft={{
    tickSize: 5,
    tickPadding: 5,
    tickRotation: 0,
    legend: 'Temperatur',
    legendOffset: -40,
    legendPosition: 'start'
  }}
  pointSize={10}
  pointColor={{ theme: 'background' }}
  pointBorderWidth={2}
  pointBorderColor={{ from: 'serieColor' }}
  pointLabelYOffset={-12}
  useMesh={true}
  legends={[
    {
      anchor: 'bottom-right',
      direction: 'column',
      justify: false,
      translateX: 100,
      translateY: 0,
      itemsSpacing: 0,
      itemDirection: 'left-to-right',
      itemWidth: 80,
      itemHeight: 20,
      itemOpacity: 0.75,
      symbolSize: 12,
      symbolShape: 'circle',
      symbolBorderColor: 'rgba(0, 0, 0, .5)',
      effects: [
        {
          on: 'hover',
          style: {
            itemBackground: 'rgba(0, 0, 0, .03)',
            itemOpacity: 1
          }
        }
      ]
    }
  ]}
/>
```