FROM nginx:alpine

COPY . /usr/share/nginx/html

# Expose port
EXPOSE 80
