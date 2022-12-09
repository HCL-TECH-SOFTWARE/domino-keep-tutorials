FROM nodered/node-red:latest

USER root
ENV DIRPATH /usr/src/node-red
WORKDIR $DIRPATH

RUN chmod 775 /usr/src/node-red && chmod 775 /usr/local/lib
RUN npm install --save axios
	
COPY ["restapiTheme.css", "restapiIcon.png", "restapi_icon_boxed.png", "restapiAuthentication.js", "settings.js", "/data/"]
RUN chmod 775 /data/restapiTheme.css && chmod 775 /data/restapiIcon.png && chmod 775 /data/restapi_icon_boxed.png && chmod 775 /data/restapiAuthentication.js && chmod 775 /data/settings.js