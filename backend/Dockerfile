# Dockerfile for Django backend

FROM python:3.9-slim

# Set the working directory inside the container
WORKDIR /app

# Install dependencies
COPY requirements.txt /app/
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the app into the container
COPY . /app/

# Expose the port the app will run on
EXPOSE 8000

# Set the entry point to start the server with migrations
CMD ["sh", "-c", "python manage.py migrate && python manage.py runserver 0.0.0.0:8000"]
