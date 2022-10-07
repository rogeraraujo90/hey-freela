import { container } from "tsyringe";
import BcryptHashProvider from "@providers/hash/BcryptHashProvider";

container.register("HashProvider", { useValue: BcryptHashProvider });
