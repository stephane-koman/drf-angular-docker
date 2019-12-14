FROM python:3

# Set environment variables
ENV PYTHONUNBUFFERED 1

# Set work directory.
RUN mkdir /code
WORKDIR /code

COPY requirements.txt /code/

# Install dependencies.
RUN pip install -r requirements.txt

# Copy project code.
COPY . /code/

EXPOSE 80