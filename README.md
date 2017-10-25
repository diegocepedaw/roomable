# Roomable

Leave no room for doubt

## Dev Setup

### Backend

If not already done, install [virtualenvwrapper](https://virtualenvwrapper.readthedocs.io/en/latest/install.html), then run `mkvirtualenv roomable`

If on Windows, install [virtualenvwrapper-win](https://pypi.python.org/pypi/virtualenvwrapper-win).

#### Linux

```bash
cd backend
workon roomable
pip install -r requirements.txt -r requirements-dev.txt
./install_hooks.sh
```

#### Windows

```batch
cd backend
workon roomable
pip install -r requirements.txt -r requirements-dev.txt
install_hooks.bat
```

#### Frontend

```bash
cd frontend
yarn install
```

## Running

### Backend

```bash
python manage.py runserver
```

### Frontend

```bash
yarn start
```
