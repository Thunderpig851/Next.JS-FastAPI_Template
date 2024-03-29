from passlib.context import CryptContext
from bson.json_util import dumps
import json
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


def hash_password(password: str):
    return pwd_context.hash(password)

def verify_password(password: str, hashed_password: str):
    return pwd_context.verify(password, hashed_password)

def parse_json(data):
    return json.loads(dumps(data))
