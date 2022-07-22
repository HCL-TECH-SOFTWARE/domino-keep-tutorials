FROM nodered/node-red:latest

USER root
ENV DIRPATH /usr/src/node-red
WORKDIR $DIRPATH

RUN chmod 775 /usr/src/node-red && chmod 775 /usr/local/lib
RUN npm install --save axios
	
COPY ["keepTheme.css", "KeepNewIcon.png", "keepAuthentication.js", "settings.js", "/data/"]
RUN chmod 775 /data/keepTheme.css && chmod 775 /data/KeepNewIcon.png && chmod 775 /data/keepAuthentication.js && chmod 775 /data/settings.js